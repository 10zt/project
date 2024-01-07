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
 * 教师用户：(TeacherUsers)表实体类
 *
 */
@TableName("`teacher_users`")
@Data
@EqualsAndHashCode(callSuper = false)
public class TeacherUsers implements Serializable {

    // TeacherUsers编号
    @TableId(value = "teacher_users_id", type = IdType.AUTO)
    private Integer teacher_users_id;

    // 教师姓名
    @TableField(value = "`teachers_name`")
    private String teachers_name;
    // 教师性别
    @TableField(value = "`teacher_gender`")
    private String teacher_gender;
    // 联系电话
    @TableField(value = "`contact_phone_number`")
    private String contact_phone_number;
    // 系别信息
    @TableField(value = "`family_information`")
    private String family_information;







    // 用户编号
    @TableField(value = "user_id")
    private Integer userId;



    // 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;







}
