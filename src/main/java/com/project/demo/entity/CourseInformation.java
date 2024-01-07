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
 * 课程信息：(CourseInformation)表实体类
 *
 */
@TableName("`course_information`")
@Data
@EqualsAndHashCode(callSuper = false)
public class CourseInformation implements Serializable {

    // CourseInformation编号
    @TableId(value = "course_information_id", type = IdType.AUTO)
    private Integer course_information_id;

    // 教师用户
    @TableField(value = "`teacher_users`")
    private Integer teacher_users;
    // 课程名称
    @TableField(value = "`course_name`")
    private String course_name;
    // 课程封面
    @TableField(value = "`course_cover`")
    private String course_cover;
    // 院系信息
    @TableField(value = "`department_information`")
    private String department_information;
    // 专业信息
    @TableField(value = "`professional_information`")
    private String professional_information;
    // 班级名称
    @TableField(value = "`class_name`")
    private String class_name;
    // 课程日期
    @TableField(value = "`course_date`")
    private Timestamp course_date;
    // 课程视频
    @TableField(value = "`course_video`")
    private String course_video;
    // 课程附件
    @TableField(value = "`course_attachments`")
    private String course_attachments;
    // 课程介绍
    @TableField(value = "`course_introduction`")
    private String course_introduction;

    // 点击数
    @TableField(value = "hits")
    private Integer hits;

    // 点赞数
    @TableField(value = "praise_len")
    private Integer praise_len;








    // 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;







}
