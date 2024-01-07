package com.project.demo.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.sql.Timestamp;


/**
 * 错题记录
 */
@TableName("user_answer_wrong")
@Data
@EqualsAndHashCode(callSuper = false)
public class UserAnswerWrong implements Serializable {

    private static final long serialVersionUID = -89845695959527153L;

    /**
     * 用户答题id：[0,10000]
     */
    @TableId(value = "user_answer_id", type = IdType.AUTO)
    private Integer user_answer_id;

    /**
     * 科目名称
     */
    @TableField(value = "subject_name")
    private String subject_name;

    /**
     * 题目类型
     */
    @TableField(value = "type")
    private String type;

    /**
     * 题目
     */
    @TableField(value = "title")
    private String title;

    /**
     * 选项
     */
    @TableField(value = "question_item")
    private String question_item;

    /**
     * 试卷id
     */
    @TableField(value = "exam_id")
    private Integer exam_id;

    /**
     * 评分状态
     */
    @TableField(value = "score_state")
    private Integer score_state;

    /**
     * 分数
     */
    @TableField(value = "score")
    private Double score;

    /**
     * 用户提交的答案
     */
    @TableField(value = "answers")
    private String answers;

    /**
     * 参考答案
     */
    @TableField(value = "answer")
    private String answer;

    /**
     * 评分详情
     */
    @TableField(value = "score_detail")
    private String score_detail;

    /**
     * 提交人
     */
    @TableField(value = "nickname")
    private String nickname;

    /**
     * 提交人ID
     */
    @TableField(value = "user_id")
    private Integer user_id;

    /**
     * 客观题得分
     */
    @TableField(value = "objective_score")
    private Double objective_score;

    /**
     * 主观题得分
     */
    @TableField(value = "subjective_score")
    private Double subjective_score;

    /**
     * 创建时间：
     */
    @TableField(value = "create_time")
    private Timestamp createTime;

    /**
     * 更新时间：
     */
    @TableField(value = "update_time")
    private Timestamp updateTime;

}

