package com.project.demo.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

import java.io.Serializable;
import java.sql.Timestamp;


/**
 * 学习课程：(LearningCourses)表实体类
 *
 */
@TableName("`learning_courses`")
@Data
@EqualsAndHashCode(callSuper = false)
public class LearningCourses implements Serializable {

    // LearningCourses编号
    @TableId(value = "learning_courses_id", type = IdType.AUTO)
    private Integer learning_courses_id;

    // 学生用户
    @TableField(value = "`student_users`")
    private Integer student_users;
    // 学生姓名
    @TableField(value = "`student_name`")
    private String student_name;
    // 课程名称
    @TableField(value = "`course_name`")
    private String course_name;
    // 课程日期
    @TableField(value = "`course_date`")
    private String course_date;










    // 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;







}
